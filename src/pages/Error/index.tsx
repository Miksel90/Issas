/**
 * NotFound component that displays a 404 error message.
 *
 * @returns {TSX.Element} The rendered NotFound component.
 */
const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <title>404 | ISSAS</title>
      </Helmet>
      <h2>404</h2>
      <p>That page does not exist!</p>
    </main>
  );
};

export default NotFoundPage;
