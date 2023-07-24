import React, { useEffect, useState } from 'react'
import MyTitle from './UI/title/MyTitle.jsx';
import classes from './styles/Projects.module.scss';
import { useSelector } from 'react-redux';
import MyButton from './UI/button/MyButton.jsx';
import Card from './UI/card/Card.jsx';

const Projects = () => {
    console.log('рендеринг')
    const lang = useSelector(state => state.lang);
    const [isLoading, setIsLoading] = useState(false);
    const [types, setTypes] = useState([]);
    const [thisType, setThisType] = useState('landing');
    const [apps, setApps] = useState([]);

    function componentDidMount() {
        useEffect(() => {
            fetch('http://localhost:2007/apps')
                .then(response => response.json())
                .then(res => {
                    setTypes(res);
                    setIsLoading(true);
                });
        }, [isLoading])
    }

    componentDidMount();

    function typeClick(type) {
        fetch(`http://localhost:2007/apps/${type}`).then(data => data.json()).then(data => {
            setThisType(type);
            setApps(data);
        })
    }

    return (
        <div className={classes.main}>
            <MyTitle>{lang === 'ru'
                ? 'Порфолио'
                : 'Portfolio'
            }</MyTitle>
            <nav className={classes.nav}>
                {isLoading ? types.map(item => {
                    return <MyButton onClick={() => typeClick(item)} active={thisType === item} >{item}</MyButton>
                })
                    : 'Загрузка...'
                }
            </nav>
            <div className={classes.apps}>
                {
                    apps.map(item => {
                        return <Card app={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects