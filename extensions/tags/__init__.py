def tag_count_list( posts):
  '''
  Return list of (tag, count) tuples such that count is the total
  number of posts having the tag.
  '''
  tcdict = {}
  for p in posts:
    for tg in p.tags:
      tcdict[tg] = tcdict[tg] + 1 if tg in tcdict else 1
  tclist = []
  for tc in tcdict:
    tclist.append( (tc, tcdict[tc]) )
  tclist.sort()
  #print("tag_count_list returning:\n%s\n" % tclist)
  return tclist




