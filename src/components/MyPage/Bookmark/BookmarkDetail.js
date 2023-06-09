import React from 'react';
import { useParams } from 'react-router-dom';
import { BookmarkNav } from '../SettingsNav';

const BookmarkDetailPage = () => {
  const { folderName } = useParams();
  const decodedFolderName = decodeURIComponent(folderName);


  return(
    <>
      <BookmarkNav folderName={decodedFolderName}/>
    </>
  );
}
export default BookmarkDetailPage;