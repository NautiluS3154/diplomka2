import React, { useState } from 'react';
import styles from './FooterEmail.module.css';
import ItemList from './ItemList';

const FooterEmail = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapp}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>Lorem Ipsum</h1>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
        <div className={styles.mini_container}>
            <div className="">
                <h1 className={styles.title}>Stay in the loop</h1>
                <p className={styles.desc}>Subscribe to receive the latest news and updates about TDA. We promise not to spam you! </p>
            </div>
            <div className={styles.input_footer}>
                <input
                    className={styles.input}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Enter email address'
                />
                <button className={styles.btn} onClick={handleButtonClick}>Добавить</button>

                {/* <ItemList items={items} /> */}
        
            </div>
        </div>
      </div>
    </div>
  );
}

export default FooterEmail;
