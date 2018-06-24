import moment from 'moment';

moment.locale('es');

export const foo = 'bar';

export const getTimePosted = (date) => {
  let day;
  let year;
  const dateMoment = moment(date);
  const isToday = dateMoment.isSame(moment(), 'day');
  const isYesterday = dateMoment.isSame(moment().subtract(1, 'day'), 'day');
  if (isToday) {
    return dateMoment.fromNow();
  } else if (isYesterday) {
    day = 'Ayer';
  } else {
    day = dateMoment.format('MMMM Do');
  }
  if (!dateMoment.isSame(moment(), 'year')) year = `, ${dateMoment.format('YYYY')}`;
  return `${day}${year || ''} a las ${dateMoment.format('h:mma')}`;
};
