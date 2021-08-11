import * as React from 'react';

type greetProps = {
  person: string;
  date: Date;
}
const greet = ({ person, date }: greetProps) => <h1>{`Hi, ${person}, today is ${date}`}</h1>

