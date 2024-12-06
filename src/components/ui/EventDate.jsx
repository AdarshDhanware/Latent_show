import React from 'react';
import { Calendar } from 'lucide-react';
import PropTypes from 'prop-types';

function EventDate({ date ,subHead, content}) {
  return (
    <div className="flex items-center justify-center gap-2 text-purple-300 bg-purple-950/30 px-6 py-3 rounded-full border border-purple-500/20 backdrop-blur-sm">
      <Calendar className="w-5 h-5" />
      <span className="font-medium">{subHead} {date}, {content}</span>
    </div>
  );
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired
};

export default EventDate;