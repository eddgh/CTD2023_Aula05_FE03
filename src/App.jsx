import User from './components/User';
import styles from './App.module.css';

const listaDeUsuarios = [
  {
    userName: 'Edmundo',
    image: 'http://github.com/eddgh.png'
  },
  {
    userName: 'Renan',
    image: 'http://github.com/lmaoclost.png'
  },
  {
    userName: "Deyse",
    image: 'http://github.com/deysebonisegnia.png'
  },
  {
    userName: "Mauricio",
    image: 'http://github.com/mauricior38.png'
  },
  {
    userName: "Cauê",
    image: 'http://github.com/cauesooouza.png'
  },
  {
    userName: "Gustavo",
    image: 'http://github.com/gustavonBrito.png'
  },
  {
    userName: "Izabela",
    image: 'http://github.com/belorzye.png'
  },
  {
    userName: "Deborah Borges",
    image: 'http://github.com/deborah-borges.png'
  },
  {
    userName: "Ronaldo",
    image: 'http://github.com/ronaldosilva0803.png'
  }
]

function App() {

  return (
    <main className={styles.main}>
      <section id="card" className={styles.cardSection}>
        <h2>Usuários</h2>

        <div className={styles.cardContainer}>
          {listaDeUsuarios && (
            listaDeUsuarios.map((usuario, index) => {
              return (
                <User key={index} user={usuario} />
              )
            })
          )}
        </div>
      </section>
    </main>
  )
}

export default App
