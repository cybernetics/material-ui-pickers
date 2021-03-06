import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { StaticTimePicker } from '@material-ui/pickers';

export default function StaticTimePickerExample() {
  const [date, handleDateChange] = React.useState<Date | null>(new Date());

  return (
    <React.Fragment>
      <StaticTimePicker
        openTo="hours"
        value={date}
        onChange={(date) => handleDateChange(date)}
        renderInput={(props) => <TextField {...props} />}
      />

      <StaticTimePicker
        ampm
        orientation="landscape"
        openTo="minutes"
        value={date}
        onChange={(date) => handleDateChange(date)}
        renderInput={(props) => <TextField {...props} />}
      />
    </React.Fragment>
  );
}
