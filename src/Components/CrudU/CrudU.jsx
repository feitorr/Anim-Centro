import React, { useEffect, useState } from 'react';
import { supabase } from "../../Components/supabaseClient";
import Sidebar_admin from '../../Components/Sidebar_admin/Sidebar_admin';
import './CrudU.css';
import Swal from 'sweetalert2';

const CrudU = () => {
  const [utilizadores, setUtilizadores] = useState([]);
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [editando, setEditando] = useState(null);
  const [modalAdicionarAberto, setModalAdicionarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);

  // Buscar utilizadores
  const fetchUtilizadores = async () => {
    const { data, error } = await supabase.from('utilizadores').select('*');
    if (error) console.log('error', error);
    else setUtilizadores(data);
  };

  // Função para adicionar um novo utilizador
  const adicionarUtilizador = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('utilizadores')
      .insert([{ nome, password }]);

    if (error) {
      console.log('Erro ao criar utilizador:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Falha ao adicionar o utilizador.',
      });
    } else {
      fetchUtilizadores();
      setModalAdicionarAberto(false);
      limparFormulario();
      Swal.fire({
        icon: 'success',
        title: 'Utilizador Adicionado!',
        text: 'O utilizador foi adicionado com sucesso.',
      });
    }
  };

  // Função para editar um utilizador existente
  const editarUtilizador = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('utilizadores')
      .update({ nome, password })
      .eq('id', editando);

    if (error) {
      console.log('Erro ao atualizar utilizador:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Falha ao editar o utilizador.',
      });
    } else {
      fetchUtilizadores();
      setModalEditarAberto(false);
      limparFormulario();
      Swal.fire({
        icon: 'success',
        title: 'Utilizador Atualizado!',
        text: 'O utilizador foi atualizado com sucesso.',
      });
    }
  };

  // Função para deletar um utilizador
  const deletarUtilizador = async (id) => {
    const result = await Swal.fire({
      title: 'Você tem certeza?',
      text: "Essa ação não pode ser desfeita!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!',
    });

    if (result.isConfirmed) {
      const { error } = await supabase.from('utilizadores').delete().eq('id', id);
      if (error) {
        console.log('Erro ao deletar utilizador:', error);
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Falha ao deletar o utilizador.',
        });
      } else {
        fetchUtilizadores();
        Swal.fire({
          icon: 'success',
          title: 'Utilizador Excluído!',
          text: 'O utilizador foi excluído com sucesso.',
        });
      }
    }
  };

  // Abrir modal de edição e preencher os campos
  const abrirModalEdicao = (utilizador) => {
    setEditando(utilizador.id);
    setNome(utilizador.nome);
    setPassword(utilizador.password);
    setModalEditarAberto(true);
  };

  // Limpar formulário
  const limparFormulario = () => {
    setNome('');
    setPassword('');
    setEditando(null);
  };

  // Buscar utilizadores ao carregar o componente
  useEffect(() => {
    fetchUtilizadores();
  }, []);

  return (
    <div className="crud-u-container">
      <div className="sidebar-admin">
        <Sidebar_admin />
      </div>
      <div className="crud-u-content">
        <h1 className='CRUD_UH1'>ADMIN PANEL - UTILIZADORES</h1>
        <button className="adicionar-btn" onClick={() => setModalAdicionarAberto(true)}>
          ADICIONAR UTILIZADOR
        </button>

        {/* Lista de Utilizadores */}
        <div className="utilizadores-lista">
          {utilizadores.map((utilizador) => (
            <div key={utilizador.id} className="utilizador-card">
              <div className="utilizador-info">
                <h3>{utilizador.nome}</h3>
                <p>Password: {utilizador.password}</p>
              </div>
              <div className="utilizador-acoes">
                <button onClick={() => abrirModalEdicao(utilizador)}>EDITAR</button>
                <button onClick={() => deletarUtilizador(utilizador.id)}>APAGAR</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Adicionar */}
        {modalAdicionarAberto && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Adicionar Utilizador</h2>
              <form onSubmit={adicionarUtilizador}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="modal-botoes">
                  <button type="submit">Adicionar</button>
                  <button type="button" onClick={() => setModalAdicionarAberto(false)}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal de Editar */}
        {modalEditarAberto && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Editar Utilizador</h2>
              <form onSubmit={editarUtilizador}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="modal-botoes">
                  <button type="submit">Atualizar</button>
                  <button type="button" onClick={() => setModalEditarAberto(false)}>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudU;