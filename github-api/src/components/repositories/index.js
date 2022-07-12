import React from 'react';
import * as S from './styled';
import RepositoryItem from '../repository-item';


const Repositories = () => {
    return (
        <S.WrapperTabs 
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                name="Desafio10-cursoemvideo" 
                linkToRepo="https://github.com/matheuspmbarcellos/Desafio10-cursoemvideo"
                fullname="matheuspmbarcellos/Desafio10-cursoemvideo"
                />
            </S.WrapperTabPanel>      
            <S.WrapperTabPanel>
                <RepositoryItem 
                name="Spread-Bootcamp" 
                linkToRepo="https://github.com/matheuspmbarcellos/Spread-Bootcamp"
                fullname="matheuspmbarcellos/Spread-Bootcamp"
                />
            </S.WrapperTabPanel>         
        </S.WrapperTabs>
    )
};

export default Repositories;
