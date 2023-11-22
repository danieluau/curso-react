// importa o logo e os estilos do componente App
import logo from './logo.svg';
import './App.css';

// importa o Axios para fazer solicitações HTTP
import axios from 'axios';

// importa os hooks useEffect e useState do React
import { useEffect, useState } from 'react';

// define o componente principal App
function App() {
  // define o estado para armazenar a lista de posts
  const [listOfPosts, setListOfPosts] = useState([]);

  // useEffect é usado para fazer a solicitação quando o componente é montado
  useEffect(() => {
    // faz a solicitação GET para a API
    axios.get('http://localhost:3001/posts')
      .then((res) => {
        // atualiza o estado com os dados recebidos da API (lista de posts)
        setListOfPosts(res.data);
      });
  }, []); // o segundo argumento é uma lista de dependências; [] significa que o efeito é executado apenas uma vez, equivalente ao componentDidMount

  // retorna o JSX com os dados renderizados
  return (
    <div className="App">
      {/* mapeia a lista de posts e renderiza cada post em um bloco div */}
      {listOfPosts.map((value, key) => {
        return (
          <div className='post' key={key}>
            {/* renderiza o título do post */}
            <div className='title'>{value.title}</div>
            {/* renderiza o corpo do post */}
            <div className='body'>{value.postText}</div>
            {/* renderiza o rodapé do post, que inclui o nome de usuário */}
            <div className='footer'>{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

// exporta o componente App
export default App;
