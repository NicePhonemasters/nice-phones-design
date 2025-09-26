import styles from './contacts.module.scss';

export default function ContactsPage() {
  return (
    <main className={styles.contactsPage}>
      <h1>Contacts</h1>
      <p>
        You can reach us via email: <strong>support@nicegadgets.com</strong>
      </p>
      <p>
        Or call us at <strong>+123 456 789</strong>
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </main>
  );
}
