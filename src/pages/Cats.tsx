import {IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle} from '@ionic/react';
import './Cats.css';
import React, {useEffect, useState} from "react";
import {arrowBackOutline} from "ionicons/icons";
import {API, ResponseType} from "../dal/API";

const Cats: React.FC = () => {
    const [breeds, setBreeds] = useState<Array<ResponseType>>([])

    useEffect(() => {
        API.getBreeds()
            .then(res => {
                setBreeds(res.data)
            })
    }, [])


    return (
        <IonPage>
            <IonHeader className='wrapper'>
                <IonButton href={'/'}>
                    <IonIcon slot="start" icon={arrowBackOutline}/>
                    <IonTitle className='wrapper__title' size="small">Requested data</IonTitle>
                </IonButton>
            </IonHeader>
            <IonContent scrollEvents={true}>
                {breeds && breeds.length > 0 && breeds.map((el, index) => {
                        return <div key={el.id} className='items'>
                            <img className='items__img' src={el.image?.url} alt={el.image?.url}/>
                            <span className='items__name'>{el.name}</span>
                        </div>
                    }
                )}
            </IonContent>
        </IonPage>
    );
};

export default Cats;
