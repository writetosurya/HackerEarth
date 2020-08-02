t=int(input())
for _ in range(t):
    s=list(input().split())
    if sorted(s[0])==sorted(s[1]):
        print('YES')
    else:
        print('NO')
