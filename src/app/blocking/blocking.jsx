import React from "react";
import { Prompt } from "react-router";

export const Blocking = () => (
  // Promt component - тоже самое что и браузерный promt, только тут есть подвязки между react Router-ом и этим Promt-ом, чтобы он вызывался при попытке перейти 
  <div>
    <h1>Blocking a transition!</h1>
    <p>
      You can block a transition and have a Navigation prompt with the
      appropriate message. If you try to go back from this page or navigate to
      some other page you will see a prompt showing up.
    </p>
    {/*message can also be a function returning a string*/}
    <Prompt message="Are you sure you want to leave?" />
  </div>
);
