import classes from "./PopUpSlider.module.css"
import React, {useEffect, useState} from "react";
import cn from "classnames";


const PopUpSlider = () => {

    // popUp logic
    let [isOpen, setIisOpen] = useState(false)
    let show = () => {
        setIisOpen(true)
    }
    let close = () => {
        setIisOpen(false)
    }

    // slider logic
    const pictures = ['https://bipbap.ru/wp-content/uploads/2017/08/04.-risunki-dlya-srisovki-legkie-dlya-devochek.jpg',
        'https://is2-ssl.mzstatic.com/image/thumb/Purple22/v4/77/1b/90/771b90a5-708f-82d9-1a93-3696dfe00f1b/source/256x256bb.jpg',
        'https://forumsmile.ru/u/1/e/0/1e0671ed91ffc54c260b1ae7860bfd75.jpg',
        'https://i.pinimg.com/474x/d4/e0/3b/d4e03b916ea5a3d0c4332974894aad7b.jpg',
        'https://3d-galleru.ru/cards/11/46/opqhit54oezpojr/celuyu-tebya-mnogo-mnogo-raz.jpg',
    'https://image1.thematicnews.com/uploads/topics/preview/00/11/36/47/704e432496_256crop.jpg']

    let [i, setI] = useState(0)
    let [images, setImages] = useState(pictures[i])

    useEffect(() => {
        changing()
    }, [i])

    let BACK = () => {
        if (i === 0) {
            setI(6)
        }
        setI((i) => {
            return i - 1
        })
    }
    let next = () => {
        if (i === 5) {
            setI(-1)
        }
        setI((i) => {
            return i + 1
        })
    }
    let changing = () => {
        setImages(pictures[i])
    }


    return <div className={classes.open}>
        <button onClick={() => show()} className={cn({
            [classes.btnHide]: isOpen === true
        }, classes.btnOpen)}>Показать слайдер
        </button>
        <dialog open={isOpen} className={classes.dialog}>
            <div>
                <div>
                    <span className={classes.banner}> Слайдер  </span>
                </div>
                <div>
                    <button className={classes.btnBack} onClick={() => BACK()}> BACK</button>
                    <img src={images} alt={'slider'} className={classes.png}/>
                    <button className={classes.btnNext} onClick={() => next()}> NEXT</button>
                </div>
                <div>
                    <button onClick={() => close()} className={classes.btnClose}>Закрыть</button>
                </div>
            </div>
        </dialog>

    </div>
}

export default PopUpSlider