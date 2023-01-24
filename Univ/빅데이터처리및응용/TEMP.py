import pandas as pd

# reads the first sheet of your excel file
df = pd.read_csv('archive (1)/reviews-1-115.csv')

df = df[(df['weighted_vote_score'] != 0)]  # Filtering dataframe

df.to_csv("output.csv")
    
