export const yearMonthDate = (date: string) =>{
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return year + "年" + month + "月" + day + "日";
}

export const getAge = (birthday: string) => {
    let dateNow = new Date();
    let dateBirth = new Date(birthday);

    /// 現在日時までのミリ秒と日数を計算
    let timeTillNow = dateNow.getTime() - dateBirth.getTime(); 
    let daysTillNow = timeTillNow / (1000 * 3600 * 24); 

    /// 年齢の年部分・月部分・日部分をそれぞれ計算
    const DAYS_PER_MONTH = 365 / 12;
    let ageY = Math.floor(daysTillNow / 365);
    let ageM = Math.floor((daysTillNow - 365*ageY) / DAYS_PER_MONTH);
    // let ageD = Math.floor((daysTillNow - 365*ageY - DAYS_PER_MONTH*ageM));
    
    return ageY+"歳"+ageM+"ヶ月"
}