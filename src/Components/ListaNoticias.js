import React from 'react';
import Noticia from './Noticia';
import PropType from 'prop-types';

function ListaNoticias({noticias}){
    return (
        <div className="row">
            {noticias.map((noticia) =>{
               return (
                    <Noticia
                        key = {noticia.url}
                        noticia={noticia}
                    />
                );
            })}
        </div>
    )
}

ListaNoticias.propTypes = {
    noticias: PropType.array.isRequired
}


export default ListaNoticias;