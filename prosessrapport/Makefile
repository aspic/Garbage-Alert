tex = Rapport.tex
report = $(patsubst %.tex, %.pdf, $(tex))
texs = $(wildcard *.tex)
imgs = $(wildcard img/*.pdf)

all : $(report)

$(report) : $(tex) $(texs) $(imgs)
	pdflatex $<
	bibtex $(basename $<)
	pdflatex $<
	#makeglossaries $(basename $<)
	pdflatex $<

clean :
	rm $(report)
