import React from "react";

export const Level = ({ location, match }) => {
  // location = например, {pathname: "/basic-routing/level1", search: "", hash: "", state: undefined, key: "m6590o"}
  // search параметр отвечает за query, напрмер из url "/basic-routing/level1?test=test1", search: "?test=test1"
  // hash - напрмер из url "/basic-routing/level1?test=test1#testhash", hash: "#testhash"
  // match = например, {path: "/basic-routing/:level", url: "/basic-routing/level1", isExact: true, params: {level: "level1"}}
  // :level - это паттерн нашего url
  // isExact - отвечает за то, чтобы он сравнивал path с url (полное совпадение)
  // в params приходит, то что указано в :level
  
  console.log(match)
  return (
    <div>
      <h2>This is {match.params.level}!</h2>
      <h3>this.props.location</h3>
      <p>{JSON.stringify(location)}</p>
      <h3>this.props.match</h3>
      <p>{JSON.stringify(match)}</p>
      {!!location.search && (
        <p>
          <strong>Query String:</strong>{" "}
          {JSON.stringify(location.search, null, 2)}
        </p>
      )}
    </div>
  );
};
