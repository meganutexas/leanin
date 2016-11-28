#include <stdio.h>
 
/*print Farhrenheit-Celsius table*/
main() {
        	int fahr;
        	for (fahr = 0; fahr <= 300; fahr = fahr + 20)
                    	printf(“%3d %g.1f\n”, fahr, (5.0/9.0)*(fahr-32));
}