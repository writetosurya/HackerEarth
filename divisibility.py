t=int(input())
li=list(map(int,input().split()))
if(li[t-1]%10==0):
    print("Yes")
else:
    print("No")
