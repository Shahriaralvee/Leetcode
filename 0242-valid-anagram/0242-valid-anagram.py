class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count=Counter(t)
        if len(s)!=len(t):
            return False
        for char in s :
            count[char]-=1
            if count[char]<0:
                    return False
        return True