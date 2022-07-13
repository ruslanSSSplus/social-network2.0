import React, {useEffect, useState} from "react";
import classes from './DataPicker.module.css'
import Days from "./Days";
import {v1} from 'uuid'


const DatePicker = () => {

    const select = (i) => {
        setSelectedDay(i);
        setSelectedMonth(month);
        setSelectedYear(year);
        let a = formatDate(new Date(year + '-' + (month + 1) + '-' + (i)))
        setSelected_date_element(a);
        setAllSelectedDates([...allSelectedDates, a])
        populateDates();
    }


    const [hide, setHide] = useState(true)
    const isHide = () => {
        setHide(!hide)
    }

    let date = new Date();
    let day = date.getDate();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())
    const [mth_element, setMth_element] = useState(months[month] + ' ' + year)
    const [selected_date_element, setSelected_date_element] = useState(formatDate(date))
    const [selectedMonth, setSelectedMonth] = useState(month);
    const [selectedYear, setSelectedYear] = useState(year);
    const [selectedDay, setSelectedDay] = useState(day);
    const [allSelectedDates, setAllSelectedDates] = useState([]);


    let days_element = [];




    populateDates();


    useEffect(() => {
        console.log(selected_date_element)
    }, [selected_date_element])

    const goToNextMonth = (m, y) => {
        if (m >= 11) {
            setMonth(0);
            setYear(y + 1);
            setMth_element(months[0] + ' ' + `${y + 1}`);
        } else {
            setMonth(m + 1);
            setMth_element(months[m + 1] + ' ' + y);
        }
        populateDates();
    }

    const goToPrevMonth = (m, y) => {
        if (m <= 0) {
            setMonth(11);
            setYear(y - 1);
            setMth_element(months[11] + ' ' + `${y - 1}`);
        } else {
            setMonth(m - 1);
            setMth_element(months[m - 1] + ' ' + y)
        }
        populateDates();
    }


    function populateDates(e) {

        let amount_days = 31;

        if (month === 1) {
            amount_days = 28;
        }

        for (let i = 0; i < amount_days; i++) {
            if (selectedDay === (i + 1) && selectedYear === year && selectedMonth === month) {
                days_element.push(<Days day={i + 1} isSelected={true} select={select} key={v1()}/>)
            } else {
                days_element.push(<Days day={i + 1} isSelected={false} select={select} key={v1()}/>)
            }
        }
    }


    function formatDate(d) {
        let day = d.getDate();
        if (day < 10) {
            day = '0' + day;
        }

        let month = d.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }

        let year = d.getFullYear();
        return day + ' / ' + month + ' / ' + year;
    }


    return <div className={classes.page}>
        <div className={classes.all}>
            <div className={classes.date} onClick={() => isHide()}>
                {selected_date_element}
            </div>
            <hr/>
            {hide ? null :
                <div>
                    <div className={classes.month}>
                        <span onClick={() => goToPrevMonth(month, year)} className={classes.prev}>&lt;</span>
                        <span className={classes.exactDate}>   {mth_element}  </span>
                        <span onClick={() => goToNextMonth(month, year)} className={classes.next}>&gt;</span>
                    </div>
                    <hr/>
                    <div className={classes.days}> {days_element}  </div>
                </div>}
        </div>

        <div className={classes.allDates}>
            <h3> Выбранные даты</h3>
            {allSelectedDates.map((el) => <div key={v1()}>
                {el}
            </div>)
            }

        </div>
    </div>
}

export default DatePicker;