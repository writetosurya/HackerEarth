lst1 = list(map(int,input().split()))
lst2 = list(map(int,input().split()))
lst3 = list(map(int,input().split()))
mx = 0
for i in range(1,len(lst2)):
    mx = max(mx,abs(lst2[i-1]-lst2[i]))
cnt = 0
for j in lst3:
    if j <= mx and lst1[2]!=0:
        cnt += 1
print(cnt)
