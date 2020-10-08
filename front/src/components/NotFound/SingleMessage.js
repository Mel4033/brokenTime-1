import React from 'react';
import { Typewriter } from 'react-typewriting-effect';

const SingleMessage = ({ message }) => (
  <div className="error__singlemessage">
    <Typewriter stopBlinkinOnComplete string={message} delay={30} cursor="|" />
  </div>
);

export default SingleMessage;
