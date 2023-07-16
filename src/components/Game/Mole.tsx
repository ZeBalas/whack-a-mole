"use client"

import { whack } from "@/store/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react";

type Dificulty = {
    rate: number,
    pop: number,
    hide: number,
}

export default function Mole() {
    const popTimeout = useRef<NodeJS.Timer>();
    const hideTimeout = useRef<NodeJS.Timer>();
    const [dificulty, setDificulty] = useState<Dificulty>({
        rate: 0.90, pop: 2000, hide: 6000,
    });
    const { inProgress, timer } = useAppSelector(state => state.game);
    const [active, setActive] = useState<boolean>(false && inProgress);
    const dispatch = useAppDispatch();


    const popup = useCallback(() => {
        setActive(true);
        hideTimeout.current = setTimeout(() => hide(), dificulty.hide);
    }, [dificulty]);

    useEffect(() => {
        switch(timer) {
            case 90:
                clearInterval(popTimeout.current)
                setDificulty({
                    rate: 0.85, pop: 1800, hide: 5500,
                })
                break;
            case 60:
                clearInterval(popTimeout.current)
                setDificulty({
                    rate: 0.80, pop: 1600, hide: 5000,
                })
            case 30:
                clearInterval(popTimeout.current)
                setDificulty({
                    rate: 0.75, pop: 1400, hide: 3000,
                })
        }
    }, [timer])

    useEffect(() => {
        popTimeout.current = setInterval(() => {
            Math.random() > dificulty.rate && popup();
        }, dificulty.pop);

        if (!inProgress) {
            hide();
            clearInterval(popTimeout.current);
        }

        return () => {
            clearInterval(popTimeout.current);
        }
    }, [popup, inProgress, dificulty])

    const whackMole = () => active && (dispatch(whack()) && hide());

    const hide = () => {
        clearInterval(hideTimeout.current);
        setActive(false);
    };

    return (
        <div data-testid="mole" className="relative flex m-auto h-[80px] w-[150px]" onClick={whackMole}>
            <Image
                src={!active ? "/assets/WAM_Hole.png" : "/assets/WAM_Mole.png"}
                width={150}
                height={150}
                alt={active ? "mole" : "hole"}
            />
        </div>
    )
}