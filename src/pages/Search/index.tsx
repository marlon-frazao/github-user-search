import axios from 'axios';
import React, { useState } from 'react';
import ButtonIcon from '../../core/components/ButtonIcon';
import { UserResponse } from '../../core/types/User';
import DateFormat from './components/DateFormat';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import SimpleInfoCard from './components/SimpleInfoCard';
import './styles.scss'


const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [userResponse, setUserResponse] = useState<UserResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const BASE_URL = 'https://api.github.com/users'

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        axios.get(`${BASE_URL}/${searchValue}`)
            .then(response => setUserResponse(response.data))
            .catch(() => console.error('Houve um erro ao buscar os dados'))
            .finally(() => setIsLoading(false))
    }

    return (
        <div className="container">
            <div className="search-card">
                <h1 className="text-title">Encontre um perfil Github</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Usuário Github"
                        value={searchValue}
                        onChange={event => setSearchValue(event.target.value)}
                    />
                    <ButtonIcon text="Encontrar" />
                </form>
                <div className="card">
                    {isLoading ? <div className="response-card"><ImageLoader /> <InfoLoader /> </div> :
                        userResponse && (
                            <div className="response-card">
                                <div className="col-3">
                                    <img src={userResponse.avatar_url} className="user-image" alt="Imagem de usuário" />
                                    <a href={userResponse.html_url}>
                                        <ButtonIcon text="Ver Perfil" />
                                    </a>
                                </div>
                                <div className="col-9">
                                    <div className="superior-card-info">
                                        <SimpleInfoCard text={`${"Repositórios públicos: "}${userResponse.public_repos}`} />
                                        <SimpleInfoCard text={`${"Seguidores: "}${userResponse.followers}`} />
                                        <SimpleInfoCard text={`${"Seguindo: "}${userResponse.following}`} />
                                    </div>
                                    <div className="card-info">
                                        <h3 className="info-text">Informações</h3>
                                        <div className="text-data">
                                            <h4>Empresa:&nbsp;</h4><h4 className="text-data-response">{userResponse.company}</h4>
                                        </div>
                                        <div className="text-data">
                                            <h4>Website/Blog:&nbsp;</h4><h4 className="text-data-response">{userResponse.blog}</h4>
                                        </div>
                                        <div className="text-data">
                                            <h4>Localidade:&nbsp;</h4><h4 className="text-data-response">{userResponse.location}</h4>
                                        </div>
                                        <div className="text-data">
                                            <h4>Membro desde:&nbsp;</h4><h4 className="text-data-response"><DateFormat dateString={userResponse.created_at} /></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div >
    );
};

export default Search;