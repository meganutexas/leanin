#include <stdio.h>
#define MAXLINE 1000 /* max input line size */


int getline(void);
void copy(void);


/* print longest input line */
main() {
	int len;                   /*current line length*/
	extern int max;		       /* maximum length seen so far*/
	extern char longest[]      /* longest line saved here */

	max = 0;
	while ((len = getline()) > 0){
		if (len > max) {
		max = len;
		copy();
	}
	if (max > 0) /*there was a line*/
		printf(“%s”, longest);
	return 0;
}


/* getline; read a line into s, return length */
int getline(void) {
	int c, i;
	extern char line[];


	for (i = 0; i < MAXLINE-1 && (c = getchar()) != EOF &&  c != ‘\n’; ++i)
		line[i] = c;
		if ( c == ‘\n’) {
			line[i] = c;
		++i;
	}
	line[i] = ‘\0’;
	return i;
}


/* copy: copy ‘from’ into ‘to’; assume it is big enough */
void copy(char to[], char from[]) {
	int i;
	extern char line[], longest[];


	i = 0;
	while ((longest[i] = line[i])) != ‘\0’
		++i;
}
