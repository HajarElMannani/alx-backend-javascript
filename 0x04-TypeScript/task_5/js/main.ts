interface MajorCredits {
  credits: number;
  __brand: 'majorCredit';
}

interface MinorCredits {
  credits: number;
  __brand: 'minorCredit';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'majorCredit'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minorCredit'
  };
}
