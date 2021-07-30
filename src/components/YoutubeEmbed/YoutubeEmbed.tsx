import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "constants/index";

type YoutubeEmbedProps = {
  embedId: string;
};

const YoutubeEmbed = (props: YoutubeEmbedProps) => {
  const { embedId } = props;
  return (
    <div className="video-responsive">
      <iframe
        width={`${!isMobile && "853"}`}
        height={`${!isMobile && "480"}`}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default YoutubeEmbed;
