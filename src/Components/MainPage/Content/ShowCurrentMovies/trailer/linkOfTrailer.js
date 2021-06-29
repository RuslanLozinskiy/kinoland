function LinkOfTrailer(props) {
  const { link } = props;

  let result = [];
  for (let item in link) {
    result.push(link[item]);
  }

  return (
    <div className="link-trailer">
      <p>
        sorry the trailer wasn't found, click on the link and you will pass on
        the Trailer -->{" "}
        <a target="_blank" rel="noopener noreferrer" href={result[0].link}>
          watch trailer
        </a>
      </p>
    </div>
  );
}
export default LinkOfTrailer;
