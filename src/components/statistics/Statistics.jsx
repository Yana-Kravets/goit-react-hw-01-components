import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => (
    <div className={css.statisticsContainer}>
      <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.stat-list}>
            {stats.map(stat => (
                <li key={stat.id}
                    className={css.item}
                    style={{
                        backgroundColor: getRandomHexColor()
                    }}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}</span>
                </li>
            ))}   
        </ul>
      </section>
  </div>
)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
  }),
 ).isRequired,
};