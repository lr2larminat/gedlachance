function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [file, setFile] = useState<File | null>(null);

  console.log('Current page:', currentPage);
  console.log('File:', file);

  return (
    <>
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'import' && (
        <ImportPage setCurrentPage={setCurrentPage} file={file} setFile={setFile} />
      )}
      {currentPage === 'parse' && <ParsePage setCurrentPage={setCurrentPage} file={file} />}
    </>
  );
}
