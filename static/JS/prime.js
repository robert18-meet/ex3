var max = (prompt('Choose number',''));
var now = 0;
var flag = 1;

const MAX_DIVIDE = 10;
const START = 2; 

alert('Primes:');

for( i = START ; i < max ; i++ )
{

	for( j = START ; j < i ; j++)
	{

		if( i%j === 0 )
		{

			flag = 0;
			break;

		}

	}

	if(flag === 1)
	{

		alert(i);

	}
	flag = 1; 

}