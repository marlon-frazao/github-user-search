import React from 'react';
import { format } from 'date-fns';

type Props = {
    dateString: string
}

const DateFormat = ({ dateString }: Props) => {
    var date = Date.parse(dateString);
    return (
        <div>
            {format(date, 'dd/MM/yyyy')}
        </div>
    );
}
export default DateFormat;