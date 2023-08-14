import styles from './User.module.css';

export default function User({ user }) {
  let likeAmount = 0;
  const updateLikeAmount = (likeOption) => {
    if (likeOption === 'down' && likeAmount - 1 >= 0) {
      likeAmount--
    }
    if (likeOption === 'up') {
      likeAmount++
    }
    console.log(likeAmount);
  }
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.cardUserImage} src={user.image} alt={`imagem do usuário ${user.userName}`} />
      </div>
        <h3>Oi eu sou {user.userName} e tenho {likeAmount} like{likeAmount > 1 ? 's' : ''} </h3>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.likeButton}`} onClick={() => updateLikeAmount('up')}>Like 👍</button>
        <button className={`${styles.button} ${styles.dislikeButton}`} onClick={() => updateLikeAmount('down')}>Like 👎</button>
      </div>
    </div>
  )
}