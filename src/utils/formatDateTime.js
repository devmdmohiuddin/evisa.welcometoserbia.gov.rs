const formatDateTime = (dateString) => {
    const date = new Date(dateString);

    const optionsDate = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    };

    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const formattedDate = date.toLocaleDateString('en-US', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    return `${formattedDate} ${formattedTime}`;
}

const formatDate = (dateString) => {
    // const date = new Date(dateString);

    // const optionsDate = {
    //     month: 'numeric',
    //     day: 'numeric',
    //     year: 'numeric'
    // };

    // const optionsTime = {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric',
    //     hour12: true
    // };

    // const formattedDate = date.toLocaleDateString('en-US', optionsDate);

    // return formattedDate;
    const d = new Date(dateString);
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const day = (`0${d.getDate()}`).slice(-2);
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
    //   return `${month}/${day}/${year}`;
}

const formatTime = (dateString) => {
    const date = new Date(dateString);

    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

    return formattedTime;
}

const formatTimeHHMMSS = (timeString) => {
    const date = new Date(`1970-01-01T${timeString}Z`); // Use a fixed date and treat time as UTC

    const hours = String(date.getUTCHours()).padStart(2, '0'); // Use getUTCHours for UTC time
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;

}

const formatTimeAMPM = (timeString) => {
    if (timeString) {

        // Split the time into hours and minutes
      let [hours, minutes] = timeString?.split(':');
      
      // Convert hours and minutes to numbers
      hours = parseInt(hours, 10);
      minutes = parseInt(minutes, 10);
      
      // Determine AM or PM
      const ampm = hours >= 12 ? 'PM' : 'AM';
    
      // Convert 24-hour to 12-hour format
      hours = hours % 12 || 12; // Convert 0 to 12 for midnight
    
      // Ensure minutes are always two digits
      minutes = minutes < 10 ? '0' + minutes : minutes;
    
      // Return formatted time
      return `${hours}:${minutes} ${ampm}`;
    }
    

}

const formatDateYMD = (dateString) => {

    const d = new Date(dateString);
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const day = (`0${d.getDate()}`).slice(-2);
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
}

const formatDateMDY = (dateString) => {
    const d = new Date(dateString);
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const day = (`0${d.getDate()}`).slice(-2);
    const year = d.getFullYear();
    return `${month}/${day}/${year}`
}

export { formatDateTime, formatDate, formatTime, formatDateYMD, formatTimeHHMMSS, formatTimeAMPM, formatDateMDY }