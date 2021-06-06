const dateFormatter = (date) => {
    const months = {
        1: "Ene",
        2: "Feb",
        3: "Mar",
        4: "Abr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Ago",
        9: "Set",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    }

    const newDate = date.toLocaleDateString()
    const newDateList = newDate.split('/')
    const month = months[newDateList[1]]
    return [`${month} ${newDateList[0]}, ${newDateList[2]}`]
}

export default dateFormatter