t=int(input())
for _ in range(t):
    n=int(input())
    for i in range(1,n+1):
        for j in range(1,2*n+1):
            if(j<=i or j>2*n-i):
                print("*",end='')
            else:
                print("#",end='')

        print()
