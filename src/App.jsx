import {useEffect, useState} from "react";
import { Spinner } from "./components/Spinner/Spinner.jsx";
import styles from './App.module.less';
import {PlayerInfo} from "./components/PlayerInfo/PlayerInfo.jsx";
import {Loader} from "./components/Loader/Loader.jsx";
import {TournamentItem} from "./components/TournamentItem/TournamentItem.jsx";


function App() {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.example.com/data');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const result = await response.json();
    //             setData(result);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента
    //
    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={styles.container}>
            <h1>Fetched Data</h1>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <Spinner/>
            <PlayerInfo text="play info "/>
            <Loader style={{color: 'white' }} />
            <TournamentItem/>
        </div>
    );
};

export default App

//
//
// function Loader () {
//
//     return (
//         <div className={styles.container}>
//
//         </div>
//     )
// }
//
// function TournamentItem() {
//
//     return (
//         <div className={styles.container}>
//
//         </div>
//     )
// }
