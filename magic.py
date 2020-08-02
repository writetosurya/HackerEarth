n=int(input())

sum=0
min=1000000000
index=-1
arr=list(map(int,input().split()))
for i in range(n):    
    sum=sum+arr[i]
for i in range(n):
    if((sum-arr[i])%7==0 and min>arr[i]):
        min=arr[i]
        index=i
print(index)
