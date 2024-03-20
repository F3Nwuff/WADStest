import Logo from '../../assets/logo2.png';
import styles from './header.module.css';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      alert("fill in first");
      return;
    }

    handleAddTask(title.trim());
    setTitle(''); 
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={Logo} />
      <h2> 
        Hilkia Kennan Latjandu
        <br/>
        2602174485
      </h2>

      <form onSubmit={handleSubmit} className={styles.addTask}>
        <input placeholder="write here..." type="text" onChange={onChangeTitle} value={title} />
        <button> + </button>
      </form>
    </header>
  )
}