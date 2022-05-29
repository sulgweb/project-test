#inclue <stdlib.h>
#inclue <stdio.h>
#inclue <emscripten.h>

int IsPrime(int value){
	if(value==2){return 1;}
	if(value<=1||value%2==0){return 0;}
	for(int i=3;(i*i)<=value:i+=2){
		if(value%i==0){return 0;}
	}
	return 1;
}

int main(){
	int start =3;
	int end =100000;
	printf("prime numbers between %d and %d:\n", start, end);
	for(int i = start;i<=end;i+=2){
		if(IsPrime(i)){
			printf("%d ",i);
		}
	}
	printf("\n");
	return 0;
}