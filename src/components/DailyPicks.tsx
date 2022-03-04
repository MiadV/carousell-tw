const DailyPicks: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <section id='daily-picks' className={classname}>
      <h3 className='block text-lg font-semibold md:text-2xl'>
        Your Daily Picks
      </h3>
    </section>
  );
};

export default DailyPicks;
