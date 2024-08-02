import React from 'react';
import '../styles/SingleInfo.css';
import EthnicInfoDisplay from './EthnicInfoDisplay';

interface CommentsCitationsProps {
  data: {
    comentarios: string;
    enlace6: string;
    setViewerUrl: (url: string | undefined) => void;
    setReferenceStatus: (visible: boolean | undefined) => void;
  }[];
}

const CommentsCitations: React.FC<CommentsCitationsProps> = ({ data }) => {
  return (
    <div className="single-info">
      <h2>Datos Extras</h2>
      <div className="content">
        {data.map((item, index) => (
          item.comentarios && (
          <EthnicInfoDisplay key={index} content={item.comentarios} link={item.enlace6} setViewerUrl={item.setViewerUrl} setReferenceStatus={item.setReferenceStatus}/>
        )))}
      </div>
    </div>
  );
};

export default CommentsCitations;