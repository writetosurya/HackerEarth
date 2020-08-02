t=int(input())
while(t):
    sum=0;
    a=input()
    for i in a:
        if(i=='0'):
            sum=sum+6
        elif(i=='1'):
            sum=sum+2
        elif(i=='2'):
            sum=sum+5
        elif(i=='3'):
            sum=sum+5
        elif(i=='4'):
            sum=sum+4
        elif(i=='5'):
            sum=sum+5
        elif(i=='6'):
            sum=sum+6
        elif(i=='7'):
            sum=sum+3
        elif(i=='8'):
            sum=sum+7
        elif(i=='9'):
            sum=sum+6
    if(sum%2!=0):
        j=1
        l=7
        print(l,end='')
        for k in range(2,int(sum/2)+1):
            print(j,end='')
    else:
        j=1
        for k in range(1,int(sum/2)+1):
            print(j,end='')
    print()
    t=t-1
