import React, { useEffect, useState } from 'react';
import { supabase } from "../../Components/supabaseClient";
import Sidebar_admin from '../../Components/Sidebar_admin/Sidebar_admin';
import './CrudS.css';
import Swal from 'sweetalert2';

const CrudS = () => {
  const [servicos, setServicos] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [primeiraDescricao, setPrimeiraDescricao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null); // Arquivo de imagem
  const [imagemUrl, setImagemUrl] = useState(''); // URL da imagem no Supabase
  const [editando, setEditando] = useState(null);
  const [modalAdicionarAberto, setModalAdicionarAberto] = useState(false);
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [modalDescricaoAberto, setModalDescricaoAberto] = useState(false); // Estado para o modal de descrição
  const [descricaoCompleta, setDescricaoCompleta] = useState(''); // Descrição completa para o modal

  // Buscar serviços
  const fetchServicos = async () => {
    const { data, error } = await supabase.from('servicos').select('*');
    if (error) console.log('error', error);
    else setServicos(data);
  };

  // Upload da imagem para o Supabase Storage
  const uploadImagem = async (file) => {
    const fileExt = file.name.split('.').pop(); // Pega a extensão do arquivo (ex: "jpg", "png")
    const fileName = `${Math.random()}.${fileExt}`; // Gera um nome único para o arquivo
    const filePath = `${fileName}`; // Caminho do arquivo no bucket
  
    const { error } = await supabase.storage
      .from('servicos-imagens') // Nome do bucket
      .upload(filePath, file); // Faz o upload
  
    if (error) {
      console.log('Erro ao fazer upload da imagem:', error);
      return null; // Se houver erro, retorna null
    }
  
    // Retorna a URL pública da imagem
    const { data } = supabase.storage
      .from('servicos-imagens')
      .getPublicUrl(filePath); // Obtém a URL pública da imagem
  
    return data.publicUrl;
    
  };

  // Função para adicionar um novo serviço
  const adicionarServico = async (e) => {
    e.preventDefault();

    let urlImagem = imagemUrl;

    // Se uma nova imagem foi selecionada, faz o upload
    if (imagem) {
      urlImagem = await uploadImagem(imagem); // Chama a função para fazer o upload
      if (!urlImagem) {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Falha ao fazer upload da imagem.',
        });
        return; // Se o upload falhar, não prossegue
      }
    }

    // Cria um novo serviço
    const { error } = await supabase
      .from('servicos')
      .insert([{ titulo, primeira_descricao: primeiraDescricao, descricao, imagem: urlImagem }]);

    if (error) {
      console.log('Erro ao criar serviço:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Falha ao adicionar o serviço.',
      });
    } else {
      fetchServicos(); // Atualiza a lista de serviços
      setModalAdicionarAberto(false); // Fecha o modal de adição
      limparFormulario(); // Limpa o formulário
      Swal.fire({
        icon: 'success',
        title: 'Serviço Adicionado!',
        text: 'O serviço foi adicionado com sucesso.',
      });
    }
  };

  // Função para editar um serviço existente
  const editarServico = async (e) => {
    e.preventDefault();

    let urlImagem = imagemUrl;

    // Se uma nova imagem foi selecionada, faz o upload
    if (imagem) {
      urlImagem = await uploadImagem(imagem); // Chama a função para fazer o upload
      if (!urlImagem) {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Falha ao fazer upload da imagem.',
        });
        return; // Se o upload falhar, não prossegue
      }
    }

    // Atualiza o serviço existente
    const { error } = await supabase
      .from('servicos')
      .update({ titulo, primeira_descricao: primeiraDescricao, descricao, imagem: urlImagem })
      .eq('id', editando); // Atualiza o serviço com o ID correspondente

    if (error) {
      console.log('Erro ao atualizar serviço:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Falha ao editar o serviço.',
      });
    } else {
      fetchServicos(); // Atualiza a lista de serviços
      setModalEditarAberto(false); // Fecha o modal de edição
      limparFormulario(); // Limpa o formulário
      Swal.fire({
        icon: 'success',
        title: 'Serviço Atualizado!',
        text: 'O serviço foi atualizado com sucesso.',
      });
    }
  };

  // Função para deletar um serviço
  const deletarServico = async (id) => {
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
      const { error } = await supabase.from('servicos').delete().eq('id', id);
      if (error) {
        console.log('Erro ao deletar serviço:', error);
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'Falha ao deletar o serviço.',
        });
      } else {
        fetchServicos(); // Atualiza a lista de serviços
        Swal.fire({
          icon: 'success',
          title: 'Serviço Excluído!',
          text: 'O serviço foi excluído com sucesso.',
        });
      }
    }
  };

  // Abrir modal de edição e preencher os campos
  const abrirModalEdicao = (servico) => {
    setEditando(servico.id); // Define o ID do serviço que está sendo editado
    setTitulo(servico.titulo);
    setPrimeiraDescricao(servico.primeira_descricao);
    setDescricao(servico.descricao);
    setImagemUrl(servico.imagem); // Define a URL da imagem existente
    setModalEditarAberto(true); // Abre o modal de edição
  };

  // Limpar formulário
  const limparFormulario = () => {
    setTitulo('');
    setPrimeiraDescricao('');
    setDescricao('');
    setImagem(null);
    setImagemUrl('');
    setEditando(null); // Limpa o estado de edição
  };

  // Função para abrir o modal de descrição completa
  const abrirModalDescricao = (descricao) => {
    setDescricaoCompleta(descricao);
    setModalDescricaoAberto(true);
  };

  // Buscar serviços ao carregar o componente
  useEffect(() => {
    fetchServicos();
  }, []);

  return (
    <div className="crud-s-container">
      <div className="sidebar-admin">
        <Sidebar_admin />
      </div>
      <div className="crud-s-content">
        <h1 className='CRUD_SH1'>ADMIN PANEL - SERVIÇOS</h1>
        <button className="adicionar-btn" onClick={() => setModalAdicionarAberto(true)}>
          ADICIONAR SERVIÇO
        </button>

        {/* Lista de Serviços */}
        <div className="servicos-lista">
          {servicos.map((servico) => (
            <div key={servico.id} className="servico-card">
              <div className="servico-info">
                <h3>{servico.titulo}</h3>
                <p>{servico.primeira_descricao}</p>
                {servico.imagem && <img src={servico.imagem} alt={servico.titulo} />}
              </div>
              <div className="servico-acoes">
                <button onClick={() => abrirModalEdicao(servico)}>EDITAR</button>
                <button onClick={() => deletarServico(servico.id)}>APAGAR</button>
                {/* Novo botão para abrir o modal de descrição completa */}
                <button onClick={() => abrirModalDescricao(servico.descricao)}>DESCRIÇÃO</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Adicionar */}
        {modalAdicionarAberto && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Adicionar Serviço</h2>
              <form onSubmit={adicionarServico}>
                <input
                  type="text"
                  placeholder="Título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Primeira Descrição"
                  value={primeiraDescricao}
                  onChange={(e) => setPrimeiraDescricao(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImagem(e.target.files[0])}
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
              <h2>Editar Serviço</h2>
              <form onSubmit={editarServico}>
                <input
                  type="text"
                  placeholder="Título"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Primeira Descrição"
                  value={primeiraDescricao}
                  onChange={(e) => setPrimeiraDescricao(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImagem(e.target.files[0])}
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

        {/* Modal de Descrição Completa */}
        {modalDescricaoAberto && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Descrição Completa</h2>
              <p>{descricaoCompleta}</p>
              <div className="modal-botoes">
                <button type="button" onClick={() => setModalDescricaoAberto(false)}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrudS;
