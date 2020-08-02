n=int(input())
sum=0
for i in range(n):
    sum=sum+i
    if(sum>=n):
        print("Patlu")
        break
    sum=sum+2*i
    if(sum>=n):
        print("Motu")
        break
