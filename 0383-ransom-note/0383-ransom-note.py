class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        charCount = Counter(magazine)
        
        for char in ransomNote :
            charCount[char]-=1
            
            if  charCount[char] <0:
                return False
        return True    
            
